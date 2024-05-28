run:
	npm run tauri dev

build: 
	npm run tauri build

update-rust-dependencies: 
	cd ./src-tauri && cargo update && cd ../
