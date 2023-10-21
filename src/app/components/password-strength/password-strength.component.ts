import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() strength!: any
  colorArray!: string[];

  ngOnChanges(): void {
    this.checkPasswordStrength();
  }

  private checkPasswordStrength(): string[] {
    this.colorArray = [];
    if (this.strength) return this.colorArray = this.strength.strengthArray

    return this.colorArray = ['grey', 'grey', 'grey'];
  }
}
