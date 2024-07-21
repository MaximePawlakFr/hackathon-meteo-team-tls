```
SELECT time, t2m/10 as t2m_celsius, latitude, longitude FROM read_parquet([
    'https://static.data.gouv.fr/resources/paquets-sp1-arome-resolution-0-01deg-prevision-du-9-avril-2024-a-6h00/20240409-105147/arome-001-sp1-00h-2024-04-09t06-00-00z-heightaboveground-2.parquet' 
]) WHERE  latitude>=43.57 and latitude<=43.58  and longitude>1.37 and longitude<=1.38 LIMIT 10000 ;


```