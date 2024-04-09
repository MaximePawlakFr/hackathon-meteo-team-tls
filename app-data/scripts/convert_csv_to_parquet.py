import os

import pandas as pd


def get_file_name_without_extension(path: str) -> str:
    file_name = os.path.split(path)[-1]
    return os.path.splitext(file_name)[0]


def read_csv_and_copy_into_parquet(data_folder_name: str, src_filepath: str) -> None:
    df = pd.read_csv(src_filepath, sep=";")
    parquet_folder = f"../data/{data_folder_name}/parquet/"
    if not os.path.exists(parquet_folder):
        os.mkdir(parquet_folder)
        print(f"Folder created: {parquet_folder}")
    csv_file_name = get_file_name_without_extension(src_filepath)
    dst_filepath = os.path.join(parquet_folder, csv_file_name)
    df.to_parquet(f"{dst_filepath}.parquet")
    print(f"File copied from {src_filepath} to {dst_filepath}")


def convert_csv_to_parquet(data_folder_name: str) -> None:
    csv_file_folder = os.path.join("../data/", data_folder_name, "csv/")
    print(csv_file_folder)
    for csv_file_name in os.listdir(csv_file_folder):
        filepath = os.path.join(csv_file_folder, csv_file_name)
        read_csv_and_copy_into_parquet(data_folder_name=data_folder_name, src_filepath=filepath)


convert_csv_to_parquet("data-climatologiques-base-toutes-stations")
