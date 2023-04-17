import { DonorValues } from "@/app/donor/model/model";

export interface DonationValues {
  amount: number;
  date: string;
}

export interface DonationEntity {
  values: DonationValues;
  donor: DonorValues;
}
