import React from 'react';
import '../css/Info.scss'


export default class Info extends React.Component {


    render(){
        return (
            <div className="body">
            <h1>How We Make Our CBD</h1>
            <hr className="separator separator--dots"/>
            <div class="timeline"> 
              <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div class="timeline__event__icon ">
                  <i class="lni-cake"></i>
            
                </div>
                <p class="timeline__event__date">
                  1
                </p>
                <div class="timeline__event__content ">
                  <div class="timeline__event__title">
                    Harvesting
                  </div>
                  <div class="timeline__event__description">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                  </div>
                </div>
              </div>
              <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                <div class="timeline__event__icon">
                  <i class="lni-burger"></i>
            
                </div>
                <p class="timeline__event__date">
                  2
                </p>
                <div class="timeline__event__content">
                  <div class="timeline__event__title">
                    Extraction
                  </div>
                  <div class="timeline__event__description">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                  </div>
                </div>
              </div>
              <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                <div class="timeline__event__icon">
                  <i class="lni-slim"></i>
            
                </div>
                <p class="timeline__event__date">
                  3
                </p>
                <div class="timeline__event__content">
                  <div class="timeline__event__title">
                    Refining
                  </div>
                  <div class="timeline__event__description">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                  </div>
            
                </div>
              </div>
              <div class="timeline__event animated fadeInUp timeline__event--type1">
                <div class="timeline__event__icon">
                  <i class="lni-cake"></i>
            
                </div>
                <p class="timeline__event__date">
                  4
                </p>
                <div class="timeline__event__content">
                  <div class="timeline__event__title">
                    Shipping
                  </div>
                  <div class="timeline__event__description">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                  </div>
                </div>
              </div>
            
            </div>
            </div>
        )}


}