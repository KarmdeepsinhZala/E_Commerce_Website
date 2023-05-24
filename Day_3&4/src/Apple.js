import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import React, { useState } from "react"
import Input from '@mui/material/Input';
import { TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import { Popover } from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Apple = () => {
    const [name, setName] = useState("Karmdeepsinh Zala");
    const [email, setEmail] = useState("karmdeepsinhzala333@gmail.com");
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();
    const onHomepageButtonclick = () => {
        Navigate("/");
        console.log('button clicked');
        console.log('Name:', name);
        console.log('Email:', email);
    };
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
            setOpen('ture');
        };
        const handleClose = () => {
            setAnchorEl(null);
            setOpen(false);
        };

        // alert("btn has been clicked");
    
    return <><div style={{
        padding: 5,
    }}>
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: 'pointer',
            // alignItems: "center",

        }} onClick={handleClick} >
            <div onClick={handleClick}
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    columnGap: 5,
                }}>
                <Avatar sx={{ bgcolor: "blue" }}>
                    VG
                </Avatar>
                {/* <span>Karmdeepsinh Zala</span> */}
            </div>
        </div>
        <div
            style={{
                padding: 5,
                display: "flex",
                flexDirection: "column",
                rowGap: 10,
            }}>
            {/* Apple🍏 */}


            <TextField variant="outlined"
                value={name} label="Name" placeholder="Name" onChange={(e) => {
                    setName(e.target.value);
                }}></TextField>
            <TextField variant="outlined"
                value={email} label="Email" placeholder="Email " onChange={(e) => {
                    setEmail(e.target.value);
                }}></TextField>
            <Button variant="contained" onClick={onHomepageButtonclick} className=""> Submit</Button>
            {/* <button onClick={onHomepageButtonclick}>Navigate to Home Page🏡</button> */}
        </div>
    </div><Popover
        open={open}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        anchorEl={anchorEl}
        onClose={handleClose}

    >
            <div style={{
                padding: 5,
            }}> <h5>Vicky Gandhi</h5>
                <LogoutOutlinedIcon onClick={onHomepageButtonclick} />
                {/* <Button variant="contained" onClick={onHomepageButtonclick} className="">
              <LogoutOutlinedIcon />
            </Button>
             */}

            </div>
        </Popover></>

}