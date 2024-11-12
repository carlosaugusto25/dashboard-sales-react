export interface ProfileEditableDataProps {
  name: string;
  phone: string;
}

export interface ProfileDataProps extends ProfileEditableDataProps {
  email: string;
}

export interface CreateProfileData {
  name: string;
  email: string;
  phone: string;
  password: string;
  message?: string | null;
}
