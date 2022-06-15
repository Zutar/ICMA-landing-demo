import style from './CommunityMap.module.css';
import {ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import {useState} from "react";
import ReactTooltip from "react-tooltip";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -20,
        name: "Iran",
        count: '15-30 mln',
        coordinates: [51.33844570659985, 35.701095961814694]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Russia",
        count: '1-2 mln',
        coordinates: [50.80292812898797, 58.75528014461958]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 20,
        name: "Turkey",
        count: '0.5 mln',
        coordinates: [32.86196704394834, 39.93282174171465]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Georgia",
        count: '0.23 mln',
        coordinates: [44.82216950779026, 41.72028422638434]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Kazakhstan",
        count: '0.1 mln',
        coordinates: [71.4352095618305, 52.19303956850864]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 20,
        name: "USA",
        count: '0.055-0.4 mln',
        coordinates: [-77.23929417492754, 38.77992514618335]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 25,
        name: "Turkmenistan",
        count: '0.05 mln',
        coordinates: [58.34271047192892, 37.95425350060607]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Ukraine",
        count: '0.045 mln',
        coordinates: [30.518859183525734, 50.47454792867506]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -18,
        name: "Uzbekistan",
        count: '0.044 mln',
        coordinates: [69.27092465935283, 41.30030651564409]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Germany",
        count: '0.024 mln',
        coordinates: [13.364519222315053, 52.52614521951666]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 20,
        name: "France",
        count: '0.024 mln',
        coordinates: [2.3506704757161754, 48.86137901934699]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: 20,
        name: "Kyrgyzstan",
        count: '0.017 mln',
        coordinates: [74.57618367030878, 42.89634121973043]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Japan",
        count: '169',
        coordinates: [139.80122769246037, 36.02919883432608]
    },
    {
        coef: 1,
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Australia",
        count: '1740',
        coordinates: [148.68875901058414, -35.10188719979535]
    },
    {
        markerOffsetX: 0,
        markerOffsetY: 25,
        name: "UAE",
        count: '7000',
        coordinates: [54.36593134228087, 24.46364730906931]
    },
    {
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Canada",
        count: '6425',
        coordinates: [-75.7282808008842, 45.43629793649681]
    },
    {
        markerOffsetX: 0,
        markerOffsetY: -25,
        name: "Sweden",
        count: '3865',
        coordinates: [18.062910575081016, 59.33567095951924]
    },
    /*
    {markerOffsetX: 0, markerOffsetY: -25, name: "Great Britain", count: '7250', coordinates: [-0.186166464685811, 51.53866297315394]},
    {markerOffsetX: 0, markerOffsetY: -25, name: "Netherlands", count: '7000', coordinates: [4.908561580391376, 52.377015534378295]},
    {markerOffsetX: 0, markerOffsetY: -25, name: "Belarus", count: '6001', coordinates: [27.547316304444138, 53.903651885990875]},
    {markerOffsetX: 0, markerOffsetY: -25, name: "Poland", count: '1788', coordinates: [20.97457202679337, 52.24243580024908]},
    {markerOffsetX: 0, markerOffsetY: -25, name: "Austria", count: '1224', coordinates: [16.413214447612766, 48.33051810383032]},
    {markerOffsetX: 0, markerOffsetY: -25, name: "Estonia", count: '1280', coordinates: [24.752393626086555, 59.468139585848654]},
    {markerOffsetX: 0, markerOffsetY: -25, name: "Czech", count: '1244', coordinates: [14.442412781309951, 50.07135800192501]},
    {markerOffsetX: 0, markerOffsetY: -25, name: "Denmark", count: '582', coordinates: [12.587485403730025, 55.71186870733557]},
    */
];

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};


function CommunityMap() {
    const [content, setContent] = useState("");

    return (
        <div className={style.mapWrapper}>
            <h2>Our community</h2>
            <p>We unite millions of ordinary Azerbaijanis and thousands of business companies in different cities around
                the world</p>
            <ComposableMap
                data-tip=""
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
                    <Marker
                        key={name}
                        coordinates={coordinates}
                        onMouseEnter={() => {
                            setContent(`${name} diaspora <br> ${count} people`);
                        }}
                        onMouseLeave={() => {
                            setContent("");
                        }}
                    >
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
            <ReactTooltip html={true}>{content}</ReactTooltip>
        </div>
    );
}

export default CommunityMap;
