import { Component, Input } from '@angular/core';

interface IOption {
  name: string;
  text: string;
  icon: string;
}

const options: IOption[] = [
  {
    name: 'create-cashier',
    text: 'Create a cashier',
    icon: 'matAttachMoney'
  },
  {
    name: 'assign-cash',
    text: 'Assign a cash',
    icon: 'matAssignmentInd'
  },
  {
    name: 'view-cashers',
    text: 'View cashers',
    icon: 'matPreview'
  }
]

const optionTemplate: IOption = {
  name: '',
  text: '',
  icon: ''
}

@Component({
  selector: 'app-card-option',
  templateUrl: './card-option.component.html',
  styleUrl: './card-option.component.css'
})
export class CardOptionComponent {
  @Input({ required: true })
  optionName: string = ''

  constructor() { }

  useOption() {
    const findOption = options.find(x => x.name === this.optionName);

    if (!findOption) {
      return optionTemplate;
    }

    return findOption;
  }
}
