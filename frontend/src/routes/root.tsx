import { Button } from "@/components/ui/button";
import React from "react";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import BrokenImageTwoToneIcon from "@mui/icons-material/BrokenImageTwoTone";
import KeyboardAltTwoToneIcon from "@mui/icons-material/KeyboardAltTwoTone";
import ScoreboardTwoToneIcon from "@mui/icons-material/ScoreboardTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

function root() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden shadow-top border-t border-gray-200">
      <nav className="flex justify-around py-2">
        <Button size="icon" variant="ghost">
          <FolderTwoToneIcon className="h-6 w-6" />
          <span className="sr-only">Playlist</span>
        </Button>
        <Button size="icon" variant="ghost">
          <BrokenImageTwoToneIcon className="h-6 w-6" />
          <span className="sr-only">Media</span>
        </Button>
        <Button size="icon" variant="ghost">
          <KeyboardAltTwoToneIcon className="h-6 w-6" />
          <span className="sr-only">Macro</span>
        </Button>
        <Button size="icon" variant="ghost">
          <ScoreboardTwoToneIcon className="h-6 w-6" />
          <span className="sr-only">Scorboard</span>
        </Button>
        <Button size="icon" variant="ghost">
          <SettingsTwoToneIcon className="h-6 w-6" />
          <span className="sr-only">Setting</span>
        </Button>
      </nav>
    </div>
  );
}

export default root;
