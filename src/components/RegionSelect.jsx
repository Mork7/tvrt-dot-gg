import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles";
import styled from "@emotion/styled";

// eslint-disable-next-line react/prop-types
export default function RegionSelect() {
  const [region, setRegion] = useState("na");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const StyledMenuItem = styled(MenuItem)`
  &&:hover {
    background-color: #454745;
  }

  &&.Mui-selected {
    background-color: #454745;
  }
  `
  
  return (
    <Box sx={{ minWidth: 120, "@media (max-width: 808px)": {
        marginRight: "10px"
    }, }}>
      <FormControl fullWidth>
        <InputLabel id="region-select-label" sx={{color: commonSmallScreenStyles.fontColor }}>
          Region
        </InputLabel>
        <Select
          placeholder="region"
          labelId="region-select-label"
          id="region-simple-select"
          value={region}
          label="Region"
          onChange={handleChange}
          sx={{color: commonSmallScreenStyles.fontColor}}
        >
          <StyledMenuItem value={"na"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>North America</StyledMenuItem>
          <StyledMenuItem value={"eune"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Europe Nordic & East</StyledMenuItem>
          <StyledMenuItem value={"euw"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Europe West</StyledMenuItem>
          <StyledMenuItem value={"ru"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Russia</StyledMenuItem>
          <StyledMenuItem value={"kr"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Korea</StyledMenuItem>
          <StyledMenuItem value={"oce"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Oceania</StyledMenuItem>
          <StyledMenuItem value={"br"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Brazil</StyledMenuItem>
          <StyledMenuItem value={"lan"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Latin America North</StyledMenuItem>
          <StyledMenuItem value={"jp"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Japan</StyledMenuItem>
          <StyledMenuItem value={"vn"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Vietnam</StyledMenuItem>
          <StyledMenuItem value={"th"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Thailand</StyledMenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
