import { useQuery } from "@tanstack/react-query";
import { debounce } from "e";
import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { searchProduct } from "../api/query_request.js";

export const useDropDownSearch = () => {
    const [state, setState] = useState("");
    const [isDropDownOpen, setDropdownStatus] = useState(false);
    const { data, isLoading, refetch } = useQuery(
        ["headerSearch"],
        () => searchProduct(state.charAt(0).toUpperCase() + state.slice(1)),
        {
            enabled: false,
        }
    );
    const navigate = useNavigate();
    const fetchProduct = debounce(refetch, 300);
    useEffect(() => {
        fetchProduct();
    }, [state]);
    const handlerDropDownClose = () => {
        setDropdownStatus(false);
    };
    const handlerSetSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
        if (state.length >= 1 && !isDropDownOpen) {
            setDropdownStatus(true);
            return;
        }

        if (state.length < 1 && isDropDownOpen) {
            setDropdownStatus(false);
        }
    };

    const goToSearch = () => {
        if (state.length > 1) {
            navigate(`/search?filterStr=${state}`);
        }
    };

    return {
        goToSearch,
        state,
        setState,
        setDropdownStatus,
        data,
        isLoading,
        handlerDropDownClose,
        handlerSetSearchInput,
        isDropDownOpen,
    };
};
