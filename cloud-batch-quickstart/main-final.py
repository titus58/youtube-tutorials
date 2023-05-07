import logging
import google.cloud.logging
import time
import os

if __name__ == "__main__":
    # client = google.cloud.logging.Client()
    # client.setup_logging()
    logging.basicConfig(level=logging.INFO)

    for i in range(100):
        logging.info("Task %s Secret %s Line %d", os.environ.get("BATCH_TASK_INDEX"), os.environ.get("SECRET"), i)
        time.sleep(5)