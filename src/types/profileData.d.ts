export interface ProfileEditableDataProps {
    name: string;
    phone: string;
}

export interface ProfileDataProps extends ProfileEditableDataProps {
    email: string;
}