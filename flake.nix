{
  description = "hackrlabs development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            pnpm
            nodejs_22
            biome
          ];

          shellHook = ''
            echo "Welcome to the hackrlabs development environment!";
          '';
        };
        apps = {
          dev = let 
            dev = pkgs.writeShellScript "dev" ''
              nix run .#install
              ${pkgs.pnpm}/bin/pnpm dev
            '';
          in {
            type = "app";
            program = "${dev}";
          };

          install = let
            install = pkgs.writeShellScript "install" ''
              ${pkgs.pnpm}/bin/pnpm install
            '';
          in {
            type = "app";
            program = "${install}";
          };
        };
      }
    );
}
