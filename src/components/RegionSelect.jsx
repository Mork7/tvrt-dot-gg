import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function RegionSelect() {
  const [region, setRegion] = useState("");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="region-select-label">
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
          <MenuItem value={"na"}>North America</MenuItem>
          <MenuItem value={"eune"}>Europe Nordic & East</MenuItem>
          <MenuItem value={"euw"}>Europe West</MenuItem>
          <MenuItem value={"ru"}>Russia</MenuItem>
          <MenuItem value={"kr"}>Korea</MenuItem>
          <MenuItem value={"oce"}>Oceania</MenuItem>
          <MenuItem value={"br"}>Brazil</MenuItem>
          <MenuItem value={"lan"}>Latin America North</MenuItem>
          <MenuItem value={"jp"}>Japan</MenuItem>
          <MenuItem value={"vn"}>Vietnam</MenuItem>
          <MenuItem value={"th"}>Thailand</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
