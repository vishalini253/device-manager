import React from 'react'
import {
    tickIcon,
} from './Assets'

class DeviceDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedMode: 1, selectedShade: 1, selectedIntensity: 0 }
    }
    onItemClick = event => {
        this.setState({ selectedMode: parseInt(event.currentTarget.dataset.id) });
    }
    handleShadeSelection = event => {
        this.setState({ selectedShade: parseInt(event.currentTarget.dataset.id) });
    }
    handleRangeSelection= event => {
        this.setState({ selectedIntensity: parseInt(event.currentTarget.value) });
    }

    renderPropertiesView = () => {
        const { device } = this.props
        const {
            shades,
            mode,
            intensity
        } = device
        let shadesView = ''
        let modesView = ''
        let intensityView = ''
        if (shades) {
            const shadesOptions = shades.map((shade, index) => {
                const style = {
                    backgroundColor: shade.color
                }
        
                return (
                    <div className="shade-option-wrapper" key={index} data-id={index} onClick={this.handleShadeSelection}>
                        <div className={"shades-list"} style={style} />
                        { index === this.state.selectedShade && <img src={tickIcon} className={"selected-shade"} alt={"Selected"} /> }
                    </div>
            )})
            shadesView = (
                <div className="device-detail-shades-view">
                    <div className="shades-heading"> Shades </div>
                    <div className={"shades-list-wrapper"}> {shadesOptions} </div>
                </div>
            )
        }
        if (mode) {
            const modesOptions = mode.map((mode, index) => {
                const {
                    name,
                    icon,
                    defaultIntensity
                } = mode
                return (
                    <div data-id={index} key={index} className={this.state.selectedMode === index ? "mode-option selected" : "mode-option"} onClick={this.onItemClick}>
                        <div className="icon-name-wrapper">
                            <img src={icon} alt={name} className={`mode-icon-${name}`} />
                            <div className={"mode-name"}> {name} </div>
                        </div>
                        <span className="default-intensity"> {defaultIntensity}% </span>
                    </div>
                )
            })
            modesView = (
                <div className="device-detail-mode-view">
                    <div className="mode-heading"> Mode </div>
                    <div className={"modes-list"}> {modesOptions} </div>
                </div>
            )
        }
        if (intensity) {
            const { start, end } = intensity
            intensityView = (
                <div className="device-detail-shades-view">
                    <div className="intensity-heading"> Intensity </div>
                    <input type="range" className={"intensity-slider"} onChange={this.handleRangeSelection} min={start} max={end} value={this.state.selectedIntensity} />
                    <span className="selected-intensity"> {this.state.selectedIntensity}% </span>
                </div>
            )
        }
        return (
            <React.Fragment>
                {shadesView}
                {modesView}
                {intensityView}
            </React.Fragment>
        )
    }
    render() {
        const { device } = this.props
        const propertiesView = this.renderPropertiesView()
        const { name } = device
        return (
            <div className="device-detail-container">
                <div className="detail-page-heading"> Devices </div>
                <div className="product-name"> {name} </div>
                {propertiesView}
            </div>
        )
    }
}

export default DeviceDetail