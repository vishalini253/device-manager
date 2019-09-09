import React from 'react'
import './styles.scss'

class DevicePreview extends React.Component {
    render() {
        const { device, onClick } = this.props
        const { image, name, description } = device
        return (
            <div className="device-preview" onClick = {() => {onClick(device)}}>
                <img src={image} alt={name} className="device-image" />
                <div className="device-data-wrapper">
                    <span className="device-name"> {name} </span>
                    <span className="device-description"> {description} </span>
                </div>
            </div>
        )
    }
}

export default DevicePreview
