/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Paint.css'

export const Menu = ({
  setLineColor, setLineWidth,
  setLineOpacity
}) => {
  return (
    <div className="Menu">
      <div className="slider">
        <label>Brush Color </label>
        <input
          type="color"
          onChange={(e) => {
            setLineColor(e.target.value);
          }} />
      </div>
      <div className="slider">
        <label>Brush Width </label>
        <input
          type="range"
          min="3"
          max="20"
          onChange={(e) => {
            setLineWidth(e.target.value);
          }} />
      </div>
      <div className="slider">
        <label>Brush Opacity</label>
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e) => {
            setLineOpacity(e.target.value / 100);
          }} />
      </div>
    </div>
  );
};