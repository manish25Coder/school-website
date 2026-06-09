import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-admission',
  imports: [ReactiveFormsModule],
  templateUrl: './admission.html',
  styleUrl: './admission.scss'
})
export class Admission {
  admissionForm:FormGroup;
  imagePreview: string | null = null;

 constructor(private fb: FormBuilder) {
    this.admissionForm = this.fb.group({

      studentDetails: this.fb.group({
        studentName: ['', Validators.required],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(3), Validators.max(18)]],
        bloodGroup: [''],
        religion: ['', Validators.required],
        casteCategory: ['', Validators.required],
        nationality: ['', Validators.required],
        motherTongue: ['', Validators.required],
        aadhaar: ['', Validators.required]
      }),

      admissionDetails: this.fb.group({
        admissionClass: ['', Validators.required],
        academicYear: ['', Validators.required],
        prevSchool: [''],
        reasonLeaving: ['']
      }),

      father: this.fb.group({
        name: ['', Validators.required],
        qualification: ['', Validators.required],
        occupation: ['', Validators.required],
        office: [''],
        contact: ['', Validators.required],
        email: ['',Validators.required],
        aadhaar: ['', Validators.required]
      }),

      mother: this.fb.group({
        name: ['', Validators.required],
        qualification: ['', Validators.required],
        occupation: ['', Validators.required],
        office: [''],
        contact: ['', Validators.required],
        email: ['',Validators.required],
        aadhaar: ['', Validators.required]
      }),

      guardian: this.fb.group({
        name: [''],
        relation: [''],
        contact: [''],
        address: ['']
      }),

      addressDetails: this.fb.group({
        presentAddress: ['', Validators.required],
        permanentAddress: ['', Validators.required],
        emergencyContact: ['', Validators.required],
        altContact: ['', Validators.required]
      }),

      documents: this.fb.group({
        studentPhoto: [null, Validators.required]
      }),

      declaration: this.fb.group({
        agree: [false, Validators.requiredTrue],
        declarationDate: ['', Validators.required]
      })

    });
  }

  generatePDF():void{
    // console.log(this.admissionForm.value);
    const content = document.getElementById('pdf')

    if(content){
      content.style.display ='block'
      html2canvas(content).then((canvas)=>{
        const imgData = canvas.toDataURL('./image/png')
        const pdf = new jsPDF('p','mm','a4')
        const imgProps=pdf.getImageProperties(imgData)
        const pdfwidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =(imgProps.height * pdfwidth)/imgProps.width;
        pdf.addImage(imgData,'png',0,0,pdfwidth,pdfHeight)
        pdf.save('admission-form.pdf')
      });
      content.style.display ='none'
    }
  }

onFileSelect(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files.length > 0) {
    const file = input.files[0];

    this.admissionForm
      .get('documents.studentPhoto')
      ?.setValue(file);

    this.admissionForm
      .get('documents.studentPhoto')
      ?.updateValueAndValidity();
      this.imagePreview = URL.createObjectURL(file);
  }
}
copyAddress(event: any) {
  if (event.target.checked) {
    const present =
      this.admissionForm.get('addressDetails.presentAddress')?.value;

    this.admissionForm
      .get('addressDetails.permanentAddress')
      ?.setValue(present);
  }
}

}