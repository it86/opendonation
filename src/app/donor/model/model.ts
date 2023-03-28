export interface DonorValues {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
}

export interface DonorEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  values: DonorValues;
}
