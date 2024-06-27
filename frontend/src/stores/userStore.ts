import create from 'zustand';

interface UserStore {
  selectedUser: string | null;
  setSelectedUser: (user: string | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
}));

export default useUserStore;