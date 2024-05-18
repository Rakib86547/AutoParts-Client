/* eslint-disable no-unused-vars */
import React from 'react';
import FeaturesProducts from './FeaturesProducts';
import RecentProducts from './RecentProducts';
import '../../../App.css'

const Features = () => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-[20px] font-semibold tab- [--tab-border-color:#D90368]" aria-label="Feature" />
                {/* <div role="tabpanel" className="tab-content p-10">Tab 1</div> */}
                <div role="tabpanel" className="tab-content p-10"><FeaturesProducts /></div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab text-[20px] font-semibold [--tab-border-color:#D90368]  [--tab-text:white]" aria-label="Recent" checked />
                {/* <div role="tabpanel" className="tab-content p-10">Tab 2</div> */}
                <div role="tabpanel" className="tab-content p-10"><RecentProducts /></div>
            </div>
        </div>
    );
};

export default Features;