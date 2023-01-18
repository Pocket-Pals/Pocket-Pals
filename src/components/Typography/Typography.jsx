import styled from 'styled-components';

const Text = styled.p`
font-size: ${props => props.size};
color: ${props => props.color};
font-weight: ${props => props.weight};
font-family: ${props => props.family};
text-align: ${props => props.align};
display: ${props => props.display};
margin: ${props => props.margin};
padding: ${props => props.padding};
width: ${props => props.width};
height: ${props => props.height};
`

export default function Typography({
    text,
    size,
    color,
    weight,
    family,
    align,
    display,
    margin,
    padding,
    width,
    height,
}) {
    return (
        <Text
            size={size}
            color={color}
            weight={weight}
            family={family}
            align={align}
            display={display}
            margin={margin}
            padding={padding}
            width={width}
            height={height}
        >
            {text}
        </Text>
    )
}