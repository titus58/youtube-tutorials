import pymysql
import os

def get_products(max_price):
    connection = pymysql.connect(unix_socket='/cloudsql/inspired-victor-367616:us-west4:test-mysql',
                                user='root',
                                password=os.environ["DB_PASS"],
                                database='products',
                                cursorclass=pymysql.cursors.DictCursor)
    with connection:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM `produce` WHERE `price` <= %s;", (max_price,))
            result = cursor.fetchall()
            result = [{"name": row["product_name"], "price": float(row["price"])} for row in result]
            return {"results": result}

if __name__ == "__main__":
    print(get_products(1))