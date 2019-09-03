import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import DivSubStyled from '../styled/DivSubStyled';

const Certificates = props => (
    <div className="Certificates">
        <div className="Certificates-container">
            <H2Styled name="Certificates" />
            {
                props.data.map((cert, index) => (
                    <div className="Certificates-item" key={`Cert-${index}`}>
                        <H3Styled>
                            {cert.name} @ {cert.institution}
                        </H3Styled>
                        <DivSubStyled>{cert.date}</DivSubStyled>
                        <PStyled name={cert.description}/>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Certificates;