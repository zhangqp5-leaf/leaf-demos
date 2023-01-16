import React, { useEffect } from "react";
import './index.less';

const DragDrop: React.FC = () => {

  useEffect(() => {
    const list: any = document.querySelector('.list');
    let sourceNode: any;
    list.ondragstart = (e: any) => {
      setTimeout(() => {
        e.target.classList.add('moving');
      })
      sourceNode = e.target;
    }
    list.ondragenter = (e: any) => {
      if (e.target === list || e.target === sourceNode) {
        return;
      }
      const children = Array.from(list.children);
      const sourceIndex = children.indexOf(sourceNode);
      const targetIndex = children.indexOf(e.target);
      if (sourceIndex < targetIndex) {
        list.insertBefore(sourceNode, e.target.nextElementSibling);
      } else {
        list.insertBefore(sourceNode, e.target); 
      }
    }
    list.ondragend = (e:any) => {
      e.target.classList.remove('moving');
    } 
  });

  return (
    <div className="list">
      <section draggable={true} className="list-item">1</section>
      <section draggable={true} className="list-item">2</section>
      <section draggable={true} className="list-item">3</section>
      <section draggable={true} className="list-item">4</section>
      <section draggable={true} className="list-item">5</section>
    </div>
  )
}

export default DragDrop;