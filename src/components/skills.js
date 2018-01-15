import React, { Component } from 'react';

import SkillMeter from './skillmeter';

class Skills extends Component {

    render() {
        return (
            <div className="container">
                <div id="languages">
                    <SkillMeter 
                        language={'Python'} 
                        comfortability={0.95} 
                        cssIDSelector={'python'}
                        color={'#CF6766'}
                    />
                    
                    <SkillMeter 
                        language={'JavaScript'}
                        comfortability={0.9}
                        cssIDSelector={'javascript'}
                        color={'#30415D'}
                    />

                    <SkillMeter
                        language={'Java'}
                        comfortability={0.8}
                        cssIDSelector={'java'}
                        color={'#031424'} 
                    />
                    
                    <SkillMeter 
                        language={'C++'}
                        comfortability={0.75}
                        cssIDSelector={'cpp'}
                        color={'#8EAE8D'}
                    />
                </div>

                <div>
                    <SkillMeter 
                        language={'Node'}
                        comfortability={0.9}
                        cssIDSelector={'node-selector'}
                        color={'#8EAE8D'}
                    />
                    
                    <SkillMeter 
                        language={'React'}
                        comfortability={0.9}
                        cssIDSelector={'react-selector'}
                        color={'#031424'}
                    />

                    <SkillMeter 
                        language={'Redux'}
                        comfortability={0.85}
                        cssIDSelector={'redux-selector'}
                        color={'#30415D'}
                    />

                    <SkillMeter 
                        language={'Flask'}
                        comfortability={0.85}
                        cssIDSelector={'flask-selector'}
                        color={'#CF6766'}
                    />

                    <SkillMeter
                        language={'Django'}
                        comfortability={0.8}
                        cssIDSelector={'django-selector'}
                        color={'#8EAE8D'}
                    />
                </div>
                
                <div id="db">
                    <SkillMeter 
                        language={'PostgreSQL'}
                        comfortability={0.8}
                        cssIDSelector={'pgsql'}
                        color={'#CF6766'}
                    />

                    <SkillMeter
                        language={'MongoDB'}
                        comfortability={0.8}
                        cssIDSelector={'mongodb'}
                        color={'#30415D'}
                    />
                </div>

                <div id="scientific-computing">
                    <SkillMeter
                        language={'Pandas'}
                        comfortability={0.95}
                        cssIDSelector={'pandas'}
                        color={'#8EAE8D'}
                    />

                    <SkillMeter
                        language={'NumPy'}
                        comfortability={0.95}
                        cssIDSelector={'numpy'}
                        color={'#CF6766'}
                    />

                    <SkillMeter
                        language={'SKLearn'}
                        comfortability={0.9}
                        cssIDSelector={'sklearn'}
                    />

                    <SkillMeter
                        language={'Statsmodels'}
                        comfortability={0.85}
                        cssIDSelector={'statsmodels'}
                    />
                </div>
            </div>
        )
    }
}

export default Skills;