import React, { ReactNode } from "react";

export type NavLinkProps ={
    href:string;
    label:string;
    icon?:React.ReactNode;
    collapsed?:boolean;
    exact?: boolean;
}

export type CardProps ={
    label:string;
    icon?:React.ReactNode;
    value:string | number;
    disc:string;
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label:string;
    error?:string;
}
export type RadioGroupContextType = {
    value:string;
    onValueChange:(value: string)=> void;
    name:string;
}
export type RadioGroupProps = {
    value:string;
    onValueChange:(value: string)=> void;
    name?:string;
    children:ReactNode;
    className?:string;
}
export type RadioItemProps ={
    value:string;
    label:string;
    className?:string;
}
export type LableProps = {
    Name:string;
    value: string | number;
}