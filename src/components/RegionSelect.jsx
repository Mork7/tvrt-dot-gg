import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles";

// eslint-disable-next-line react/prop-types
export default function RegionSelect() {
  const [region, setRegion] = useState("");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

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
        >
          <MenuItem value={"na"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>North America</MenuItem>
          <MenuItem value={"eune"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Europe Nordic & East</MenuItem>
          <MenuItem value={"euw"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Europe West</MenuItem>
          <MenuItem value={"ru"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Russia</MenuItem>
          <MenuItem value={"kr"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Korea</MenuItem>
          <MenuItem value={"oce"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Oceania</MenuItem>
          <MenuItem value={"br"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Brazil</MenuItem>
          <MenuItem value={"lan"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Latin America North</MenuItem>
          <MenuItem value={"jp"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Japan</MenuItem>
          <MenuItem value={"vn"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Vietnam</MenuItem>
          <MenuItem value={"th"} sx={{bgcolor: "#212422", color: "#d5d6db"}}>Thailand</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
