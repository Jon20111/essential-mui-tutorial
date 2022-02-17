import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Input from "./Input";
import Output from "./Output";
import Avatar from '@mui/material/Avatar';
import {
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";

const drawerWidth = 100;


const EssentialMUITutorial = (props) => {
    return (
        <BrowserRouter>
            <div>
                <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}><Toolbar><Typography variant="h4" sx={{ flexGrow: 1 }}>MUI Tutorial</Typography><Avatar sx={{ bgcolor: 'magenta' }}>JM</Avatar></Toolbar></AppBar>
                <Drawer
                    variant="persistent"
                    open={true}
                    ModalProps={{
                        keepMounted: true,
                        hideBackdrop: true
                    }}
                    PaperProps={{ elevation: 12, sx: { bgcolor: 'primary.light', width: drawerWidth, textAlign: 'center', borderRight: 0 } }}
                >
                    <Toolbar />
                    <nav >
                        <List>
                            <ListItem button>
                                <Link to="/input">
                                    <ListItemText primary="Input" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link
                                    to={{
                                        pathname: "/output",
                                    }}
                                >
                                    <ListItemText primary="Output" />
                                </Link>
                            </ListItem>
                        </List>
                    </nav>
                </Drawer>
                <main style={{ marginLeft: drawerWidth + 12, marginTop: 12 }}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<Input />} />
                        <Route path="input" element={<Input />} />
                        <Route path="output" element={<Output />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default EssentialMUITutorial;
