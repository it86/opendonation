export interface DonorValues {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
}

export interface DonorEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  values: DonorValues;
}
