import React from 'react';
import { Link } from 'react-router-dom'
const CapabilitiesSection = ({ display }) => {
    return (
        <section style={{'display': display ? 'block' : 'none'}}>
            <table>
                <thead>
                <tr>
                    <th>Capability</th>
                    <th><Link to="/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/">Data Preprocess</Link></th>
                    <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxTeehr/">TEEHR Evaluation</Link></th>
                    <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxVisualizer/">Data Visualizer</Link></th>
                    <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/">DataStreamCLI</Link></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>GUI</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Hydrofabric Subsetting</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>✅ (view only)</td>
                    <td>✅🔨</td>
                </tr>
                <tr>
                    <td>NetCDF Forcing Processing</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>✅🔨</td>
                </tr>
                <tr>
                    <td>Zarr Forcing Processing</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Forcing Metadata Generation</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅🔨</td>
                </tr>
                <tr>
                    <td>NextGen BMI Configuration File Generation</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅🔨</td>
                </tr>
                <tr>
                    <td>Directory and File Format Validation</td>
                    <td>🔨</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅🔨</td>
                </tr>
                <tr>
                    <td>NextGen Execution via NGIAB</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅</td>
                </tr>
                <tr>
                    <td>Execution Metadata Generation</td>
                    <td class='checkmark-color'>🔨</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅🔨</td>
                </tr>
                <tr>
                    <td>Calibration</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Evaluation</td>
                    <td>-</td>
                    <td>✅🔨</td>
                    <td>🔨 (displays TEEHR results)</td>
                    <td>✅</td>
                </tr>
                <tr>
                    <td>Visualization</td>
                    <td>-</td>
                    <td>🔨 (metrics visualization)</td>
                    <td>✅</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}

export default CapabilitiesSection;