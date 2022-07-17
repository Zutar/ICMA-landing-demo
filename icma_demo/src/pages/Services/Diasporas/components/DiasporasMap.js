import style from './DiasporasMap.module.css';
import {ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import globalMap from '../../../../assets/globalMap.json';

const markers = [
    {coef: 1, markerOffsetX: 0, markerOffsetY: -20, name: "Iran", count: '15-30 mln', coordinates: [51.33844570659985, 35.701095961814694]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: -25, name: "Russia", count: '1-2 mln', coordinates: [50.80292812898797, 58.75528014461958]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: 20, name: "Turkey", count: '0.5 mln', coordinates: [32.86196704394834, 39.93282174171465]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: -25, name: "Georgia", count: '0.23 mln', coordinates: [44.82216950779026, 41.72028422638434]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: -25, name: "Kazakhstan", count: '0.1 mln', coordinates: [71.4352095618305, 52.19303956850864]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: 20, name: "USA", count: '0.055-0.4 mln', coordinates: [-77.23929417492754, 38.77992514618335]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: 25, name: "Turkmenistan", count: '0.05 mln', coordinates: [58.34271047192892, 37.95425350060607]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: -25, name: "Ukraine", count: '0.045 mln', coordinates: [30.518859183525734, 50.47454792867506]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: -18, name: "Uzbekistan", count: '0.044 mln', coordinates: [69.27092465935283, 41.30030651564409]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: -25, name: "Germany", count: '0.024 mln', coordinates: [13.364519222315053, 52.52614521951666]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: 20, name: "France", count: '0.024 mln', coordinates: [2.3506704757161754, 48.86137901934699]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: 20, name: "Kyrgyzstan", count: '0.017 mln', coordinates: [74.57618367030878, 42.89634121973043]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: -25, name: "Japan", count: '169', coordinates: [139.80122769246037, 36.02919883432608]},
    {coef: 1, markerOffsetX: 0, markerOffsetY: -25, name: "Australia", count: '1740', coordinates: [148.68875901058414, -35.10188719979535]},
];


function DiasporasMap() {
    return (
        <div className={style.mapWrapper}>
            <ComposableMap
                className={style.map}
            >
                <Geographies geography={globalMap}>
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
                            style={{fontFamily: "system-ui", fontSize: `${0.8 * coef}em`, fontWeight: '600', fill: "#000000"}}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
}

export default DiasporasMap;
