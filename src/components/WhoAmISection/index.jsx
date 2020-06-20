import React from 'react';
import { Button } from 'reactstrap';
import ElementSection from '../layouts/ElementSection';
import TitleComponent from '../TitleComponent';
import downloadFile from '../../../static/cv.pdf'

const text = "Mi nombre es Leonardo Santella. Naci en Caracas, Venezuela, estoy casado y tengo una familia increible. Me apasionan las computadoras desde que tengo memoria. \
Actualmente me encuentro trabajando como ingeniero de Software en las oficinas de Amazon, en Madrid"

class WhoAmISection extends React.Component {
    render () {
        return (
            <div className="c4p-component-whoami">
                <p>
                    {text}
                </p>
                <Button type="submit" onClick={()=>{window.open(downloadFile)}} className={"cv-download-button"}>
                    Descarga mi CV
                </Button>
            </div>
        );
    }
}

export default WhoAmISection;

