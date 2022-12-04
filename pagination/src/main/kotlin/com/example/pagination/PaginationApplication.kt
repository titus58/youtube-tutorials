package com.example.pagination

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.nio.ByteBuffer
import java.util.Base64

@SpringBootApplication
class PaginationApplication

fun main(args: Array<String>) {
	runApplication<PaginationApplication>(*args)
}


@Entity
data class Produce(
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	val id: Long,
	val name: String,
	val rating: Long
)

interface ProduceRepository : PagingAndSortingRepository<Produce, Long>

data class ProduceResponse(
	val items: Iterable<Produce>,
	val hasNext: Boolean
)

data class ProduceCursorResponse(
	val items: Iterable<Produce>,
	val cursor: String?
)

object PageUtil {
	fun fromCursor(cursor: String): Pageable {
		val decoder = Base64.getDecoder()
		val bb = ByteBuffer.wrap(decoder.decode(cursor))
		return PageRequest.of(
			bb.int,
			bb.int,
			Sort.by("rating").descending().and(Sort.by("id"))
		)
	}

	fun firstPage(size: Int) =
		PageRequest.of(
			0, size,
			Sort.by("rating").descending().and(Sort.by("id"))
		)

	fun createCursor(page: Pageable): String {
		val bb = ByteBuffer.allocate(Int.SIZE_BYTES * 2)
		bb.putInt(page.pageNumber)
		bb.putInt(page.pageSize)
		val encoder = Base64.getEncoder()
		return encoder.encodeToString(bb.array())
	}
}

@RestController
class ProduceController(
	val produceRepository: ProduceRepository
) {
	@GetMapping("/top-produce")
	fun topProduce(@RequestParam(defaultValue = "1") page: Int, @RequestParam(defaultValue = "5") size: Int) =
		produceRepository.findAll(
			PageRequest.of(
				page - 1,
				size,
				Sort.by("rating").descending().and(Sort.by("id"))
			)
		).let {
			ProduceResponse(
				items = it.toList(),
				hasNext = it.hasNext()
			)
		}

	@GetMapping("/top-produce-cursor")
	fun topProduceCursor(@RequestParam cursor: String?, @RequestParam(defaultValue = "5") size: Int) =
		produceRepository.findAll(
			cursor?.let { PageUtil.fromCursor(it) } ?: PageUtil.firstPage(size)
		).let {
			ProduceCursorResponse(
				items = it.toList(),
				cursor = if (it.hasNext()) PageUtil.createCursor(it.nextPageable()) else null
			)
		}

}
