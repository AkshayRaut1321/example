import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        console.log(error);
        alert('An unexpected error occurred.');
    }
}