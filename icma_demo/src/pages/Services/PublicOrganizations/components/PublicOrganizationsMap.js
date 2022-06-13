import style from './PublicOrganizations.module.css';
import {ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -20,
        name: "Iran",
        count: 25,
        coordinates: [51.33844570659985, 35.701095961814694]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Russia",
        count: 11,
        coordinates: [50.80292812898797, 58.75528014461958]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 20,
        name: "Turkey",
        count: 5,
        coordinates: [32.86196704394834, 39.93282174171465]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Georgia",
        count: 9,
        coordinates: [44.82216950779026, 41.72028422638434]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Kazakhstan",
        count: 5,
        coordinates: [71.4352095618305, 52.19303956850864]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 20,
        name: "USA",
        count: 12,
        coordinates: [-77.23929417492754, 38.77992514618335]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 25,
        name: "Turkmenistan",
        count: 2,
        coordinates: [58.34271047192892, 37.95425350060607]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Ukraine",
        count: 3,
        coordinates: [30.518859183525734, 50.47454792867506]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -18,
        name: "Uzbekistan",
        count: 5,
        coordinates: [69.27092465935283, 41.30030651564409]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Germany",
        count: 2,
        coordinates: [13.364519222315053, 52.52614521951666]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 20,
        name: "France",
        count: 7,
        coordinates: [2.3506704757161754, 48.86137901934699]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 20,
        name: "Kyrgyzstan",
        count: 3,
        coordinates: [74.57618367030878, 42.89634121973043]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Japan",
        count: 3,
        coordinates: [139.80122769246037, 36.02919883432608]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Australia",
        count: 1,
        coordinates: [148.68875901058414, -35.10188719979535]
    },
];


function PublicOrganizations() {
    const orgCount = markers.reduce((sum, item) => {
        if (typeof (sum) === 'object') sum = sum.count + item.count;
        sum += item.count;
        return sum;
    });

    return (
        <div className={style.mapWrapper}>
            <div className={style.mapStats}>
                <div className={style.mapStatsItem}>
                    <b>{orgCount}</b>
                    <p>Number of organizations</p>
                </div>
                <div className={style.mapStatsItem}>
                    <b>{orgCount * 897}</b>
                    <p>Number of participants in organizations</p>
                </div>
                <div className={style.mapStatsItem}>
                    <b>{markers.length}</b>
                    <p>Number of countries</p>
                </div>
            </div>
            <ComposableMap
                className={style.map}
            >
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: "#6fdbff",
                                        stroke: "#ccf0ff",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "var(--main-color-darker)",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "--main-dark-color",
                                        outline: "none"
                                    }
                                }}
                            />
                        ))
                    }
                </Geographies>
                {markers.map(({coef, name, count, coordinates, markerOffsetX, markerOffsetY}) => (
                    <Marker key={name} coordinates={coordinates}>
                        <circle r={7} fill="#2b394a" stroke="#fff" strokeWidth={1}/>
                        <text
                            textAnchor="middle"
                            x={markerOffsetX}
                            y={markerOffsetY}
                            style={{
                                fontFamily: "system-ui",
                                fontSize: `${0.8 * coef}em`,
                                fontWeight: '600',
                                fill: "#000000"
                            }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
}

export default PublicOrganizations;
