export interface LeadsPostDataProps {
  name: string;
  email: string;
  phone: string;
}

export interface LeadsDataProps extends LeadsPostDataProps {
  id: number;
}
