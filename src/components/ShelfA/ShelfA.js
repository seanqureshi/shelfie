import React, {Component} from 'react'
import './ShelfA.css'
import {Link} from 'react-router-dom'
class ShelfA extends Component {
    render() {
        return (
          <div className="Shelf_A_button">
            <Link><h1>Shelf A</h1></Link>
            
          </div>
        );
      }
    }

    export default ShelfA;