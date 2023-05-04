import logging
import google.cloud.logging

if __name__ == "__main__":
    client = google.cloud.logging.Client()
    client.setup_logging()

    for i in range(10):
        logging.info("b-Line %d", i)