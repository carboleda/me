import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import DivSubStyled from '../styled/DivSubStyled';

const Experience = props => (
    <div className="Experience">
        <div className="Experience-container">
            <H2Styled name="Experience" />
            {
                props.data.map((exp, index) => (
                    <div className="Experience-item" key={`Exp-${index}`}>
                        <H3Styled>
                            {exp.jobTitle} @ {exp.company}
                        </H3Styled>
                        <DivSubStyled>{exp.startDate} - {exp.endDate}</DivSubStyled>
                        <PStyled name={exp.jobDescription} />
                    </div>
                ))
            }
        </div>
    </div>
);

export default Experience;