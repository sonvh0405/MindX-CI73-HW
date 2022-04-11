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
    return (
        <div>
            <p>Cách 1</p>
            <button onClick={handleClickNext}>Next</button>
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
    const handleClickNext = () => {
        setActiveLightIndex(
            activeLightIndex === lightsOrder.length - 1 ? 0 : activeLightIndex + 1
        )
    }
    return <div>
        <p>Cách 2</p>
        <button onClick={handleClickNext}>Next</button>
        <div className='lights-container'>
            {lightsOrder.map((light, index) => {
                return <div className='light' style={{ backgroundColor: index === activeLightIndex ? light : 'white' }}></div>
            })}
        </div>
    </div>
};

export { TrafficLights2 };