import React, {Component} from 'react';
import { Container, Image, Tab, Tabs, Card, Row, Col } from 'react-bootstrap'
import "../tabs.css"
import {data} from '../../../data'

const cardComp = () => {

  return (
   
      <div className=''>
        <Row>
           {data.map(product => (
            <Product key={product.id} {...product} />
          ))}  
        </Row>
      </div>
    ) 
  
};

export default cardComp;