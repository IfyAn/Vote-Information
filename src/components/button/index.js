import React from 'react';
import { Button } from '@chakra-ui/react';
import './button.css';

export function CustomButton(props) {
    const { content, isLoading } = props
    return (
        <Button
            mt={4}
            className="custom_btn"
            isLoading={isLoading || false}
            type="submit"
        >
            {content || 'content'}
        </Button>
    )
}

