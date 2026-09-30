window.GIS_LAYERS = [
{id:"L1",short:"L1",name:"Bản đồ & trực quan hóa"},
{id:"L2",short:"L2",name:"Places · Search · Geocoding"},
{id:"L3",short:"L3",name:"Quản lý & liên thông dữ liệu"},
{id:"L4",short:"L4",name:"Vector & Spatial Analysis"},
{id:"L5",short:"L5",name:"Network Analyst & Accessibility"},
{id:"L6",short:"L6",name:"Raster · DEM · Remote Sensing"},
{id:"L7",short:"L7",name:"3D · Terrain · Reality GIS"},
{id:"L8",short:"L8",name:"Temporal · IoT · Realtime GIS"},
{id:"L9",short:"L9",name:"Spatial Statistics · Location Intelligence"},
{id:"L10",short:"L10",name:"GeoAI · Automation · Decision Support"}
];

window.GIS_TOOLSETS = {
"map-core":{qgis:"QGIS Symbology, Labels, Layout; QuickMapServices",google:"Maps JavaScript API / Data layer / Map Tiles",arcgis:"ArcGIS Pro Map + ArcGIS Online Web Map",open:"MapLibre GL JS, Leaflet, deck.gl"},
"webmap":{qgis:"qgis2web xuất Leaflet/OpenLayers",google:"Maps JavaScript API + Maps Datasets",arcgis:"ArcGIS Online / Experience Builder",open:"MapLibre GL JS + GeoJSON/PMTiles"},
"vector-tiles":{qgis:"QGIS vector tile styling / qgis2web",google:"Map Tiles API / cloud-based map styling",arcgis:"Vector Tile Style Editor / hosted vector tiles",open:"Tippecanoe + PMTiles + MapLibre"},
"places":{qgis:"QuickOSM, HCMGIS, Processing",google:"Places API (New) / Places Aggregate",arcgis:"ArcGIS World Geocoding / Business Analyst POI",open:"Overpass API, OSM, Nominatim, Pelias"},
"geocode":{qgis:"MMQGIS geocode / GeoCoding plugins / HCMGIS",google:"Geocoding API + Address Validation",arcgis:"ArcGIS Geocoding / locators",open:"Nominatim, Pelias, Photon"},
"admin":{qgis:"HCMGIS + Select by Location + Join",google:"Geocoding/Places cho địa chỉ; không thay thế bộ địa giới chuyên dụng",arcgis:"Administrative boundaries + Spatial Join/Locate Features",open:"GADM/OSM + PostGIS ST_Contains"},
"data-convert":{qgis:"GDAL/OGR Processing, DB Manager, HCMGIS batch converter",google:"Maps Datasets nhận dữ liệu phù hợp; Earth Engine Assets cho raster/vector",arcgis:"Conversion Tools / Data Interoperability",open:"GDAL/OGR, ogr2ogr, GeoPandas"},
"crs":{qgis:"Reproject Layer / GDAL / HCMGIS VN-2000",google:"Maps chủ yếu WGS84/Web Mercator; Earth Engine tự quản projection theo image",arcgis:"Project / Define Projection",open:"PROJ, pyproj, GDAL"},
"quality":{qgis:"Check Validity, Fix Geometries, Topology Checker",google:"Không phải bộ QA topology tổng quát",arcgis:"Check Geometry / Repair Geometry / topology rules",open:"GEOS, PostGIS ST_IsValid/ST_MakeValid"},
"database":{qgis:"DB Manager / PostgreSQL provider",google:"BigQuery GIS / Earth Engine assets tùy bài toán",arcgis:"Enterprise Geodatabase / hosted feature layers",open:"PostGIS, DuckDB Spatial, GeoParquet"},
"catalog":{qgis:"Layer metadata / QGIS Server catalogs qua hệ sinh thái",google:"Earth Engine Data Catalog / Maps Datasets",arcgis:"ArcGIS Catalog / Portal / Living Atlas",open:"STAC, pycsw, GeoNetwork"},
"field":{qgis:"QField Sync / Mergin Maps plugins",google:"Maps SDK + custom form app",arcgis:"Field Maps / Survey123",open:"QField, ODK, GeoODK"},
"vector":{qgis:"Native Processing: Buffer, Clip, Intersect, Join, Voronoi...",google:"Maps hiển thị/lọc; xử lý vector nặng nên làm server/BigQuery GIS",arcgis:"Analysis Tools / Pairwise Overlay / Spatial Join",open:"GEOS, PostGIS, Turf.js, GeoPandas"},
"network-route":{qgis:"QNEAT/QNEAT3, ORS Tools, native network analysis",google:"Routes API",arcgis:"Network Analyst Route",open:"OSRM, Valhalla, pgRouting, openrouteservice"},
"network-matrix":{qgis:"QNEAT OD Matrix / ORS Tools Matrix",google:"Routes API computeRouteMatrix",arcgis:"Network Analyst OD Cost Matrix",open:"openrouteservice Matrix, Valhalla matrix, pgRouting"},
"network-iso":{qgis:"QNEAT Iso-Area / ORS Tools Isochrones",google:"Isochrones API (Preview)",arcgis:"Network Analyst Service Area",open:"openrouteservice Isochrones, Valhalla isochrones"},
"network-opt":{qgis:"ORS/QNEAT + Python OR-Tools cho tối ưu nâng cao",google:"Route Optimization API",arcgis:"Vehicle Routing Problem / Location-Allocation",open:"Google OR-Tools, VROOM, pgRouting"},
"roads":{qgis:"Networks / GRASS v.net / custom matching",google:"Roads API Snap to Roads / Nearest Roads",arcgis:"Network dataset + Locate/Snap + route measures",open:"Valhalla Meili, OSRM Match"},
"earthengine":{qgis:"Google Earth Engine plugin + SCP",google:"Google Earth Engine",arcgis:"Image Analyst / Raster Functions / Living Atlas",open:"rasterio, xarray, rioxarray, STAC, eo-learn"},
"raster":{qgis:"GDAL/SAGA/GRASS raster processing + SCP",google:"Earth Engine image algebra and reducers",arcgis:"Spatial Analyst / Image Analyst",open:"GDAL, rasterio, WhiteboxTools, GRASS"},
"hydro":{qgis:"GRASS/SAGA hydrology algorithms",google:"Earth Engine + DEM datasets/scripts",arcgis:"Spatial Analyst Hydrology toolset",open:"WhiteboxTools, TauDEM, GRASS r.watershed"},
"terrain":{qgis:"QGIS terrain analysis / Profile Tool / OpenTopography DEM Downloader",google:"Elevation API; Earth Engine DEM",arcgis:"Spatial Analyst Surface / 3D Analyst",open:"GDAL DEM, WhiteboxTools"},
"3d":{qgis:"Qgis2threejs + QGIS 3D",google:"Photorealistic 3D Tiles / Maps 3D",arcgis:"Scene Viewer / 3D Analyst / Scene Layers",open:"CesiumJS, three.js, 3D Tiles"},
"lidar":{qgis:"PDAL provider + point cloud tools",google:"Không phải nền tảng xử lý LiDAR tổng quát",arcgis:"3D Analyst LAS Dataset / point cloud",open:"PDAL, Entwine, Potree"},
"realtime":{qgis:"Temporal Controller / TimeManager + MQTT/WebSocket plugin hoặc custom",google:"Maps JS hiển thị realtime; Weather/Air Quality APIs tùy use case",arcgis:"Velocity / GeoEvent / Stream layers / Dashboards",open:"MQTT, Kafka, WebSocket, TimescaleDB, deck.gl"},
"stats":{qgis:"Processing + Hotspot/KDE/statistical plugins/R",google:"Places Insights/Places Aggregate; Earth Engine reducers",arcgis:"Spatial Statistics / Business Analyst",open:"PySAL, GeoDa, PostGIS, DuckDB"},
"geoai":{qgis:"Processing Modeler + Python + AI plugins",google:"Earth Engine ML + Gemini/Maps Grounding tùy use case",arcgis:"GeoAI / Deep Learning / ModelBuilder / Notebooks",open:"PyTorch, TensorFlow, segment-geospatial, GeoPandas, LangChain-style agents"},
"automation":{qgis:"Processing Modeler + PyQGIS",google:"Cloud Functions/Run + Maps/Earth Engine APIs",arcgis:"ModelBuilder + ArcPy + Notebooks",open:"Python, Prefect/Airflow, GDAL, PostGIS"}
};

window.GIS_PROBLEMS = [];
window.addGISProblems = xs => window.GIS_PROBLEMS.push(...xs);
window.gp = (id,layer,title,scenario,user,inputs,steps,toolset,output,example,reference,url,tags,exampleType) => ({id,layer,title,scenario,user,inputs,steps,toolset,output,example,reference,url,tags,exampleType});
