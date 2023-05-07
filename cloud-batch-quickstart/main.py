import logging
import google.cloud.logging
import time

if __name__ == "__main__":
    client = google.cloud.logging.Client()
    client.setup_logging()

    for i in range(10):
        logging.info("Line %d", i)
        time.sleep(1)