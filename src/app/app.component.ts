import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menucollection';
  data: any;

  constructor() {
    this.data = {};
    this.data.isAllSelected = false;
    this.data.isAllCollapsed = false;
    
    //List object having hierarchy of parents and its children
    this.data.ParentChildchecklist = [
      {
        id: 1,value: 'Salad',isSelected: false,isClosed:true,
        childList: [
          {
            id: 1,parent_id: 1,value: 'Santa Fe',isSelected: false
          },
          {
            id: 2,parent_id: 1,value: 'Greek',isSelected: false
          },
          {
            id: 3,parent_id: 1,value: 'Asia',isSelected: false
          },
          {
            id: 4,parent_id: 1,value: 'Dressing',isSelected: false,
            childList: [
              {
                id: 1,parent_id: 4,value: 'Italian',isSelected: false
              },
              {
                id: 2,parent_id: 4,value: 'Blue Cheese',isSelected: false
              },
              {
                id: 3,parent_id: 4,value: 'Ranch',isSelected: false
              }
            ]
          },
          {
            id: 5,parent_id: 1,value: 'Bread',isSelected: false
          }
          
        ]
      },
      {
        id: 2,value: 'Entree',isSelected: false,isClosed:true,
        childList: [
          {
            id: 1,parent_id: 2,value: 'Steak',isSelected: false
          },
          {
            id: 2,parent_id: 2,value: 'Salmon',isSelected: false
          },
          {
            id: 3,parent_id: 2,value: 'Rice',isSelected: false
          }          
        ]
      },
      {
        id: 3,value: 'Soup',isSelected: false,isClosed:true,
        childList: [
          {
            id: 1,parent_id: 3,value: ' Minestroune',isSelected: false
          },
          {
            id: 2,parent_id: 3,value: 'Hot And Sour',isSelected: false
          },
          {
            id: 3,parent_id: 3,value: 'Miso',isSelected: false
          },
          {
            id: 4,parent_id: 3,value: 'Bread',isSelected: false
          }
        ]
      }
    ];
  }

  //Click event on parent checkbox  
  parentCheck(parentObj) {
    for (var i = 0; i < parentObj.childList.length; i++) {
      parentObj.childList[i].isSelected = parentObj.isSelected;
    }
  }

  //Click event on child checkbox  
  childCheck(parentObj, childObj) {
    parentObj.isSelected = childObj.every(function (itemChild: any) {
      return itemChild.isSelected == true;
    })
  }

  //Click event on master select
  selectUnselectAll(obj) {
    obj.isAllSelected = !obj.isAllSelected;
    for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
      obj.ParentChildchecklist[i].isSelected = obj.isAllSelected;
      for (var j = 0; j < obj.ParentChildchecklist[i].childList.length; j++) {
        obj.ParentChildchecklist[i].childList[j].isSelected = obj.isAllSelected;
      }
    }
  }

  //Expand/Collapse event on each parent
  expandCollapse(obj){
    obj.isClosed = !obj.isClosed;
  }

  //Master expand/ collapse event
  expandCollapseAll(obj){
    for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
      obj.ParentChildchecklist[i].isClosed = !obj.isAllCollapsed;
    }
    obj.isAllCollapsed = !obj.isAllCollapsed;
  }

  //Just to show updated JSON object on view
  stringify(obj) {
    return JSON.stringify(obj);
  }
}
