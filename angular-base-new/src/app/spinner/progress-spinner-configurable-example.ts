import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * @title MatRipple basic usage
 */
@Component({
    selector: 'progress-spinner-configurable-example',
    templateUrl: 'progress-spinner-configurable-example.html',
    styleUrls: ['progress-spinner-configurable-example.css'],
    standalone: true,
    imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, MatRippleModule],
})
export class ProgressSpinnerConfigurableExample    {
    centered = false;
    disabled = false;
    unbounded = false;

    radius!: number;
    color!: string;
}
