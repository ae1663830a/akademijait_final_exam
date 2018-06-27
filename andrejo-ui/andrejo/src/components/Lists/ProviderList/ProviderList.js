import React, {PureComponent} from 'react';
import Provider from "./Provider";
import {Table} from "react-bootstrap";
import '../List.css';

class ProviderList extends PureComponent {

    render() {
        const providers = this.props.objectList;
        const listItems = providers.map((provider, index) =>
            <Provider
                key={provider.firstName}
                firstName={provider.firstName}
                lastName={provider.lastName}
                milkAlergy={provider.milkAlergy}
                nutsAlergy={provider.nutsAlergy}
                drinkAlcohol={provider.drinkAlcohol}
                details={() => this.props.details(index)}
            />
        );
        return (
            <div id='objectList' className='tableList'>
                <Table striped condensed hover responsive>
                    <thead id='objectListHeader'>
                    <tr>
                        <th id='objectName'>Vardas</th>
                        <th id='objectType'>Pavardė</th>
                        <th id='objectCode'>Alergija pienui</th>
                        <th id='objectCity'>Alergija riešutams</th>
                        <th id='objectRating'>Vartoja alkoholį?</th>
                    </tr>
                    </thead>
                    <tbody>{listItems}</tbody>
                </Table>
            </div>
        )
    }
}

export default ProviderList;
