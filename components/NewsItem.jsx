import React from 'react'
import {useState,useEffect} from 'react'
function NewsItem({title,description,src,url}) {
    console.log(src)
  return (
<div className="card bg-dark text-light mb-3 d-inline-block" style={{maxWidth:"365px", maxHeight:"500px", marginLeft:"5px"}}>
  <img src={src} style={{}}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Visit</a>
  </div>
</div>
  )
}

export default NewsItem