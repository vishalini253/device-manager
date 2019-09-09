import React from 'react'
import DevicePreview from './DevicePreview'
import DeviceDetail from './DeviceDetail'
import { devicesList } from './fixture'
import {
    backArrow,
    rightArrow
} from './Assets'

class DevicesManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isSideBarOpen: true, device: '' }
    }
    handleDeviceSelection = device => {
        this.setState({
            device: device
        })
    }
    renderDeviceDetailView = () => {
        const deviceData = this.state.device || devicesList[0]
        return <DeviceDetail device={deviceData} />
    }
    render() {
        const devicesView = devicesList.map((device,index) => {
            return <DevicePreview key={index} device={device} onClick={this.handleDeviceSelection} />
        })
        const deviceDetailView = this.renderDeviceDetailView()
        console.log('vishalini', this.state.isSideBarOpen)
        return (
            <div className='device-manager-container'>
                <aside className='side-bar close'>
                    {this.state.isSideBarOpen && <img src={backArrow} className="back-arrow" alt='back arrow' />}
                    <div className="side-bar-container">
                        {devicesView}
                    </div>
                    {!this.state.isSideBarOpen && <img src={rightArrow} className="right-arrow" alt='right arrow' />}
                </aside>
                {deviceDetailView}
            </div>
        )
    }
}

export default DevicesManager
