import { useState } from 'react';
import './trafficlights.css'

const TrafficLights1 = () => {
    const [lights, setLights] = useState([
        {
            color: 'red',
            isActive: true,
        },
        {
            color: 'yellow',
            isActive: false,
        },
        {
            color: 'green',
            isActive: false,
        }
    ]);

    const handleClickBack = () => {
        const activeLightIndex = lights.findIndex((light) => {
            return light.isActive;
        });
        let preAvtiveLightIndex;
        if (activeLightIndex === 0) {
            preAvtiveLightIndex = lights.length - 1;
        } else {
            preAvtiveLightIndex = activeLightIndex - 1;
        }
        const newLights = [...lights];
        newLights[activeLightIndex].isActive = false;
        newLights[preAvtiveLightIndex].isActive = true;
        setLights(newLights);
    }

    const handleClickNext = () => {
        const activeLightIndex = lights.findIndex((light) => {
            return light.isActive;
        });
        let nextAvtiveLightIndex;
        if (activeLightIndex === lights.length - 1) {
            nextAvtiveLightIndex = 0;
        } else {
            nextAvtiveLightIndex = activeLightIndex + 1;
        }
        const newLights = [...lights];
        newLights[activeLightIndex].isActive = false;
        newLights[nextAvtiveLightIndex].isActive = true;
        setLights(newLights);
    }

    const [direction, setDirection] = useState(true);
    const handleClick = () => {
        const activeLightIndex = lights.findIndex((light) => {
            return light.isActive;
        });
        let nextAvtiveLightIndex;
        if (direction) {
            nextAvtiveLightIndex = activeLightIndex + 1;
        } else {
            nextAvtiveLightIndex = activeLightIndex - 1;
        }
        const newLights = [...lights];
        newLights[activeLightIndex].isActive = false;
        newLights[nextAvtiveLightIndex].isActive = true;
        setLights(newLights);

        nextAvtiveLightIndex===0&&setDirection(true);
        nextAvtiveLightIndex===lights.length - 1&&setDirection(false);
    }

    return (
        <div>
            <p>C??ch 1</p>
            <button onClick={handleClickBack}>Previous</button>
            <button onClick={handleClickNext}>Next</button>
            <button onClick={handleClick}>Click</button>
            <div className='lights-container'>
                {lights.map(light => (<div className='light' style={{ backgroundColor: light.isActive ? light.color : 'white' }}></div>))}
            </div>
        </div>
    )
}

export { TrafficLights1 };



const TrafficLights2 = () => {
    const lightsOrder = ['red', 'yellow', 'green'];
    const [activeLightIndex, setActiveLightIndex] = useState(0);

    const handleClickBack = () => {
        setActiveLightIndex(
            activeLightIndex === 0 ? lightsOrder.length - 1 : activeLightIndex - 1
        )
    }

    const handleClickNext = () => {
        setActiveLightIndex(
            activeLightIndex === lightsOrder.length - 1 ? 0 : activeLightIndex + 1
        )
    }
    return <div>
        <p>C??ch 2</p>
        <button onClick={handleClickBack}>Previous</button>
        <button onClick={handleClickNext}>Next</button>
        <div className='lights-container'>
            {lightsOrder.map((light, index) => {
                return <div className='light' style={{ backgroundColor: index === activeLightIndex ? light : 'white' }}></div>
            })}
        </div>
    </div>
};

export { TrafficLights2 };